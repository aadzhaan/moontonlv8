<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubscription extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','subscription_plan_id','price','expired_date','payment_status','snapToken'];
    public function User(){
        return $this->belongsTo(User::class, 'user_id');
    }
    public function SubscriptionPlan(){
        return $this->belongsTo(SubscriptionPlan::class, 'subscription_plan_id');
    }
}
