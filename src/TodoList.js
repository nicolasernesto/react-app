import React from "react";
import "./TodoList.css"
function TodoList(prop) {

    return(
        <section>
            <ul>
                {prop.children}
            </ul>
        </section>

    )

}
export {TodoList}