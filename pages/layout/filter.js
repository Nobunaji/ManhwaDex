import style from "/styles/filter.module.css";
import React, { useState, useEffect  } from "react";
import { useRouter } from "next/router";

export default function Filter(props) {
    return (
        <div className={style.filter}>
            <FilterDropdown type={props.type}>
                <Dropdown></Dropdown>
            </FilterDropdown>
        </div>
    )
}

export async function rotate() {
    var rotated = arguments[0];
    var deg = rotated ? 0 : 180;
    var svg = document.getElementById("Chariot");
    svg.style.transform = 'rotate('+deg+'deg)';
    console.log(rotated);
    return !rotated;
}

function FilterDropdown(props) {
    const [open, setOpen] = useState(false);
    const type = useRouter().query['type'] || props.type;
    return (
        <div className={style.type} onClick={() => setOpen(!open)}>
            <div className={style.dropdown}>
                <div>
                    <legend>Type</legend>
                    <article>{type}</article>
                </div>
                <svg id="Chariot" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path data-v-20f285ec="" d="m6 9 6 6 6-6"/>
                </svg>
            </div>
            {open && props.children}
        </div>
    )
}

function Dropdown() {
    return (
        <div className={style.dropdown_content}>
            <Item title="Manhwa"/>
            <Item title="Manga"/>
            <Item title="Pornhwa"/>
            <Item title="Doujin"/>
        </div>
    )
}

function Item(props) {
    const path = "?type=" + props.title;
    return (
        <a href={path} className={style.item}>{props.title}</a>
    )
}