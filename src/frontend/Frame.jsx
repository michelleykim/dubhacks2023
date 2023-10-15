"use client";

import React from "react";

const Frame = ({ children }) => {
    return (
        <div className="dark:bg-zinc-800 p-5 rounded-xl">
            {children}
        </div>
    );

}

export default Frame;