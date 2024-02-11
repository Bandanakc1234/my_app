import { NextResponse } from "next/server";

export function GET(request) {
    const users = [
        {
            name: 'aditi pradhan',
            phone: "23654",
            course: "next.js"
        },
        {
            name: 'aditi pradhan',
            phone: "23654",
            course: "next.js"
        },
        {
            name: 'aditi pradhan',
            phone: "23654",
            course: "next.js"
        }
    ];

    return NextResponse.json(users);
}

export function POST() {

}

export function DELETE(request) {

    console.log("delete api called");
    return NextResponse.json({
        message: "deleted !!",
        status: true,
    },
    {status:201, statusText: "status text"}
    );
}

export function PUT() {

}