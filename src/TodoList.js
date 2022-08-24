import React from "react";

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