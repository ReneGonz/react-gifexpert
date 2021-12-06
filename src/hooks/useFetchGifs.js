import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    },[category])


    return state; //{data:[]. loading: true }
}