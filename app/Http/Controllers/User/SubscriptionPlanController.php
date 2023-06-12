<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Inertia\Inertia;
use Carbon\Carbon;
use Auth;

class SubscriptionPlanController extends Controller
{
    public function index(){
        $subscriptionPlan = SubscriptionPlan::all();
        return Inertia::render('User/Dashboard/SubscriptionPlan', ['subscriptionPlan' => $subscriptionPlan]);
    }

    public function user_subscribe(Request $r, SubscriptionPlan $subscriptionPlan){
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'success'
        ];
        $insert = UserSubscription::create($data);
        return redirect(route('user.dashboard.index'));
    }
}
