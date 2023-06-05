import Authenticated from '@/Layouts/Authenticated/Index';
import SubscriptionCard from '@/Components/SubscriptionCard';
export default function Pricing(){
    return (<>
    <Authenticated>
        <div className="ml-[300px] px-[50px]">
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                 {/* Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                     {/* Basic --> */}
                     <SubscriptionCard
                     name="Basic"
                     price={299999}
                     duration={3}
                     features={["Feature A","Feature B","Feature C"]}
                     buttontext="Start Basic"
                     />

                     {/* For Greatest --> */}
                     <SubscriptionCard
                     isPremium
                     name="Premium"
                     price={999999}
                     duration={12}
                     features={["Feature A","Feature B","Feature C","Feature D","Feature E","Feature F"]}
                     buttontext="Subscribe Now"
                     />
                </div>
                 {/* /Pricing Card --> */}
            </div>
        </div>
    </Authenticated>
    </>);
}