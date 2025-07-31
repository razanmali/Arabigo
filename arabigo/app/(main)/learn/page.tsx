import { redirect } from "next/navigation";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { getUserProgress } from "@/db/queries";


const LearnPage = async () => {
    const userProgressData = getUserProgress();

    const [
        userProgress
    ] = await Promise.all([
        userProgressData
    ]);

    if (!userProgress || !userProgress.activeCourse){
        redirect("/courses");
    }

    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
           <StickyWrapper>
           <UserProgress
           activeCourse={userProgress.activeCourse}
           hearts={userProgress.hearts}
           points={userProgress.points}
           hasActiveSubscription={false}>

           </UserProgress>
           </StickyWrapper>
           <FeedWrapper>
           <Header title={userProgress.activeCourse.title}/>
           </FeedWrapper>
        </div>
    )
}
export default LearnPage;