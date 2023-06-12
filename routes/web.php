<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubscriptionPlanController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::get('/admin', function () {
//     return 'hi admin';
// })->middleware('role:admin');
// Route::get('/user', function () {
//     return 'hi user';
// })->middleware('role:user');
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::redirect('/', '/login');
Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function(){
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('checkUserSubscription:true');
    Route::get('/subscription-plan', [SubscriptionPlanController::class, 'index'])->name('subscription-plan.index')->middleware('checkUserSubscription:false');
    Route::post('/subscription-plan/{subscriptionPlan}/user-subscribe', [SubscriptionPlanController::class, 'user_subscribe'])->name('subscription-plan.user-subscribe')->middleware('checkUserSubscription:false');
});
// Route::get('/dashboard', function () {
//     return Inertia::render('User/Dashboard/Index');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('prototype')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Prototype/Login');
    })->name('prototype.login');
    Route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('prototype.register');
    Route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('prototype.dashboard');
    Route::get('/pricing', function () {
        return Inertia::render('Prototype/Pricing');
    })->name('prototype.pricing');
    Route::get('/movie/{slug}', function () {
        return Inertia::render('Prototype/Movie/Show');
    })->name('prototype.movie.show');
});

require __DIR__.'/auth.php';
