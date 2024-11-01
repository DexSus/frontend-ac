import React from "react";
import { QuestionBox } from "./components/index";

export const FAQSection = () => {

    return(
        <section className="faq" id="faq">
            <h2 className="heading"> Frequently Asked Question(s)</h2>

            <div className="questions-container">

                <QuestionBox title={"Lorem Ipsum 1"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo doloribus repellat aperiam obcaecati consequatur veniam doloremque culpa ipsum iste. Dolorum non iste deserunt error, at laborum sit reiciendis esse!"}/>
                <QuestionBox title={"Lorem Ipsum 2"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo doloribus repellat aperiam obcaecati consequatur veniam doloremque culpa ipsum iste. Dolorum non iste deserunt error, at laborum sit reiciendis esse!"}/>
                <QuestionBox title={"Lorem Ipsum 3"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo doloribus repellat aperiam obcaecati consequatur veniam doloremque culpa ipsum iste. Dolorum non iste deserunt error, at laborum sit reiciendis esse!"}/>
                <QuestionBox title={"Lorem Ipsum 4"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo doloribus repellat aperiam obcaecati consequatur veniam doloremque culpa ipsum iste. Dolorum non iste deserunt error, at laborum sit reiciendis esse!"}/>

            </div>
        </section>
    );
}