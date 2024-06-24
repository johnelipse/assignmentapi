import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="px-[1rem]">
        <h3 className="text-white text-[2.5rem] mt-5">
          Assignments API Endpoints
        </h3>
        <div>
          <h3 className="text-white text-[1.4rem] mt-5">Get All Assignments</h3>
        <div className="mt-4">
        <Link
            className="text-white   py-3 px-3 border-[1px] w-[100%]"
            href="https://assignmentapi.vercel.app/api/assignments"
          >
            [GET]https://assignmentapi.vercel.app/api/assignments
          </Link>
        </div>
      <div className="mt-7 ">
        <h3 className="text-white text-[1.2rem] ">Response</h3>
        <div className="mt-4 text-white border-[1px] px-2 py-3 w-full">
        
     ["_id": "6679761401262827c937209b",<br/>
      "title": "Dom Manipulation",<br/>
      "description": "This is the descripton for Assignment 1",<br/>
      "image": "https://coding-school-typescript.vercel.app/_next/image?url=https%3A%2F%2Fpublic-files.gumroad.com%2Fzb8tbbmhjq2rwe7n326kkdxw2hwx&w=1920&q=75",<br/>
      "link": "https://desishub-docs.vercel.app/programming-tutorials/nextj",<br/>
      "__v": 0]<br/>
    
    
      ["_id": "6679774501262827c937209e",<br/>
      "title": "AirMax Product Detail Page",<br/>
      "description": "In this challenge, you'll build a beautiful product page.",<br/>
      "image": "https://www.desishub.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAirMaxBlackSnikers.dc17e7a1.jpg&w=828&q=75",<br/>
      "link": "https://www.desishub.com/desishub-coding-school/projects-and-challenges/landing-page-design",<br/>
      "__v": 0]
    
        </div>
      </div>
        </div>
        <div className="mt-[8rem]">
          <h3 className="text-white text-[1.4rem] mt-5">Get A single Assignment</h3>
        <div className="mt-4">
        <Link
            className="text-white   py-3 px-3 border-[1px] w-full"
            href="https://assignmentapi.vercel.app/api/assignments/6679761401262827c937209b"
          >
            [GET]  https://assignmentapi.vercel.app/api/assignments/6679761401262827c937209b
          </Link>
        </div>
      <div className="mt-7">
        <h3 className="text-white text-[1.2rem] ">Response</h3>
        <div className="mt-4 text-white border-[1px] px-2 py-3">
        
     ["_id": "6679761401262827c937209b",<br/>
      "title": "Dom Manipulation",<br/>
      "description": "This is the descripton for Assignment 1",<br/>
      "image": "https://coding-school-typescript.vercel.app/_next/image?url=https%3A%2F%2Fpublic-files.gumroad.com%2Fzb8tbbmhjq2rwe7n326kkdxw2hwx&w=1920&q=75",<br/>
      "link": "https://desishub-docs.vercel.app/programming-tutorials/nextj",<br/>
      "__v": 0]<br/>
       </div>
      </div>
        </div>
        <div className="mt-[8rem]">
          <h3 className="text-white text-[1.4rem] mt-5">Creating An Assignment</h3>
        <div className="mt-4">
        <Link
            className="text-white   py-3 px-3 border-[1px]"
            href="https://assignmentapi.vercel.app/api/assignments"
          >
            [POST] https://assignmentapi.vercel.app/api/assignments
          </Link>
        </div>
      <div className="mt-7">
        <h3 className="text-white text-[1.2rem] ">Body</h3>
        <div className="mt-4 text-white border-[1px] px-2 py-3">
        
     ["_id": "6679761401262827c937209b",<br/>
      "title": "Dom Manipulation",<br/>
      "description": "This is the descripton for Assignment 1",<br/>
      "image": "https://coding-school-typescript.vercel.app/_next/image?url=https%3A%2F%2Fpublic-files.gumroad.com%2Fzb8tbbmhjq2rwe7n326kkdxw2hwx&w=1920&q=75",<br/>
      "link": "https://desishub-docs.vercel.app/programming-tutorials/nextj",<br/>
      "__v": 0]<br/>
       </div>
      </div>
        </div>
        <div className="mt-[8rem] pb-[4rem]">
          <h3 className="text-white text-[1.4rem] mt-5">Deleting An Assignment</h3>
        <div className="mt-4">
        <Link
            className="text-white   py-3 px-3 border-[1px]"
            href="https://assignmentapi.vercel.app/api/assignments/6679761401262827c937209b"
          >
            [DELETE]  https://assignmentapi.vercel.app/api/assignments/6679761401262827c937209b
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
