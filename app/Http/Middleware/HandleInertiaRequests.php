<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Auth;
use Carbon\Carbon;
use Session;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    private function activePlan(){
        $activePlan = Auth::user() ? Auth::user()->LastActiveUserSubscription : null;
        if(!$activePlan){
            return null;
        }
        $lastDay = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->SubscriptionPlan->active_period_in_months);
        $activeDay = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        $remainingActiveDay = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now());
        return ['name' => $activePlan->SubscriptionPlan->name, 'active' => $activeDay, 'remainingActive' => $remainingActiveDay];
    }


    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(), //kalau pake inertia dia Auth usernya cuman ngambil data table aja kalau di blade kan langsung manggil modelnya
                'activePlan' => $this->activePlan() //untuk ambil active subscription perlu diinisialisasi di class baru
            ],
            'flashMessage' => [
                'message' => Session::get('message'),
                'type' => Session::get('type')
            ],
            'ziggy' => function () {
                return (new Ziggy)->toArray();
            },
        ]);
    }
}
