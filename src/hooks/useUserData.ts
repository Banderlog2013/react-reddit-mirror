import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUserData, meRequestAsync } from "../store/me/action";
import { RootState } from "../store/store";

export function useUserData() {
	const data = useSelector<RootState, IUserData>(state => state.me.data);
	const loading = useSelector<RootState, boolean>(state => state.me.loading);
	const token = useSelector<RootState, string>(state => state.token);
	const dispatch = useDispatch();
    //console.log(token);
	
    useEffect(() => {
		if (!token) return;
		dispatch<any>(meRequestAsync());
    }, [token])

    return {
		data,
		loading,
	}
}


