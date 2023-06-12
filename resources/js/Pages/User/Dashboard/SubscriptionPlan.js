import Authenticated from '@/Layouts/Authenticated/Index';
import SubscriptionCard from '@/Components/SubscriptionCard';
import { Inertia } from '@inertiajs/inertia';
export default function SubscriptionPlan({auth, subscriptionPlan}){
    const selectSubscription = (id) => {
        Inertia.post(
            route('user.dashboard.subscription-plan.user-subscribe', {subscriptionPlan : id})
        )
    }
    return (
    <Authenticated auth={auth}>
        <div className="mx-auto px-[50px]">
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                 {/* Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {subscriptionPlan.map((data) => (
                        <SubscriptionCard
                        key={data.id}
                        name={data.name}
                        price={data.price}
                        duration={data.active_period_in_months}
                        features={JSON.parse(data.featured)}
                        isPremium={data.name === "Premium"}
                        onSelectSubscription = {() => {selectSubscription(data.id)}}
                        />
                    ))}
                </div>
                 {/* /Pricing Card --> */}
            </div>
        </div>
    </Authenticated>
    );
}