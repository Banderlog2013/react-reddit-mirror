import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { MeRequest, MeRequestError, MeRequestSuccess } from "../store/me/action";
import { RootState } from "../store/store";

export interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({});
	const token = useSelector<RootState, string>(state => state.token);
	const dispatch = useDispatch();
	console.log(token)

    useEffect(() => {
		if (!token) return;
		dispatch(MeRequest());
		axios.get('https://oauth.reddit.com/api/v1/me', {
		headers: { 'Authorization': `bearer ${token}`  },
		}).then((resp) => {
			const userData = resp.data;
			const MyUserData = { name: userData.name, iconImg: userData.icon_img.split('?')[0] };
			setData(MyUserData);
			//setData({ name: userData.name, iconImg: userData.icon_img.split('?')[0] });
			//console.log(data);
			dispatch(MeRequestSuccess(MyUserData));
		}).catch((error) => {
			console.log(error);
			dispatch(MeRequestError(error));
		});

    }, [token])
    return [data]
}


