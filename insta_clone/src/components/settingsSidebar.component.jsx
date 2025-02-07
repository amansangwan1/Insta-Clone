import React from "react";
import { Outlet } from "react-router-dom";
import SideNavigation from "./sidebar.navigation.component";

const SettingsSidebar = () => {
    return (
        <>
            <div className="h-full text-white flex flex-col gap-4 min-w-[20rem] overflow-y-auto max-h-screen scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">


                <h1 className="text-2xl font-bold px-4 mt-12 justify-center ml-4">Settings</h1>
                <p className="mx-4 px-4 mt-12 text-dark-grey text-sm">How to use Instagram</p>
                <SideNavigation className="min-h-10" to="edit" image="fi fi-rr-user" text="Edit profile"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-bell" text="Notifications"></SideNavigation>
                <p className="mx-4 px-4 text-dark-grey text-sm">Who can see your content</p>
                <SideNavigation className="min-h-10" image="fi fi-rr-user-lock" text="Account privacy"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-circle-star" text="Close Friends"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-cross" text="Blocked"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-circle-dashed" text="Hide story and live"></SideNavigation>
                <p className="mx-4 px-4 text-dark-grey text-sm">How others can interact with you</p>
                <SideNavigation className="min-h-10" image="fi fi-rr-edit" text="Message and story replies"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-tags" text="Tags and mentions"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-comment" text="comments"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-share" text="Sharing and reuse"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-user-slash" text="Restricted accounts"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-file-word" text="Hidden words"></SideNavigation>
                <p className="mx-4 px-4 text-dark-grey text-sm">What you see</p>
                <SideNavigation className="min-h-10" image="fi fi-rr-volume-mute" text="Muted accounts"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-copy-image" text="Content preferences"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-heart-slash" text="Like and share counts"></SideNavigation>
                <p className="mx-4 px-4 text-dark-grey text-sm">Your app and media</p>
                <SideNavigation className="min-h-10" image="fi fi-rr-arrow-down-to-dotted-line" text="Archiving and downloading"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-language" text="Languages"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-site" text="Website permissions"></SideNavigation>
                <p className="mx-4 px-4 text-dark-grey text-sm">For families</p>
                <SideNavigation image="fi fi-rr-family" text="Family Center"></SideNavigation>
                <p className="mx-4 px-4 text-dark-grey text-sm">For professionals</p>
                <SideNavigation className="min-h-10" image="fi fi-rr-stats" text="Account type and tools"></SideNavigation>
                <p className="mx-4 px-4 text-dark-grey text-sm">More info and support</p>
                <SideNavigation className="min-h-10" image="fi fi-rr-info" text="Help"></SideNavigation>
                <SideNavigation className="min-h-10" image="fi fi-rr-user-lock" text="Privacy Center"></SideNavigation>
                <SideNavigation className="mb-4 min-h-10" image="fi fi-rr-user" text="Account Status"></SideNavigation>
            </div>
            <Outlet></Outlet>
        </>
    );
};

export default SettingsSidebar;
