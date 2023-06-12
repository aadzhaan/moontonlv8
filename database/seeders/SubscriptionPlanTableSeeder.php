<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlan = [[
            'name' => 'Basic', 
            'price' => 200000, 
            'active_period_in_months' => '3', 
            'featured' => json_encode(['Feature A', 'Feature B', 'Feature C'])
        ],
        [
            'name' => 'Premium', 
            'price' => 800000, 
            'active_period_in_months' => '12', 
            'featured' => json_encode(['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E', 'Feature F'])
        ]];

        SubscriptionPlan::insert($subscriptionPlan);
    }
}
