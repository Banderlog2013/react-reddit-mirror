export interface ITimePostProps {
    data: any;
}

export function timePost(props: ITimePostProps) {
	const postDate = new Date().getTime() - new Date((props.data?.created)*1000).getTime();
	let days = Math.floor( (postDate/(1000*60*60*24)) ),
		hours = Math.floor( (postDate/(1000*60*60) % 24) ),
		minutes = Math.floor( (postDate/1000/60) % 60 );

	let resulTime, result; 
	if (postDate >= days && days != 0) {
		resulTime = days;
	} else if (postDate >= hours && hours != 0) {
		resulTime = hours
	} else if (postDate >= minutes && minutes != 0) {
		resulTime = minutes
	}
	
	if (resulTime == days && days == 1) {
		return `${days} день назад`
	} else if (resulTime == days && days > 1) {
		return `${days} дней назад`
	} else if (resulTime == hours && hours == 1 || hours == 21) {
		return `${hours} час назад` 
	} else if (resulTime == hours && hours > 1 && hours <= 4 || hours >=  22 && hours <= 24) {
		return `${hours} часа назад` 
	} else if (resulTime == hours && hours > 1 && hours >= 5) {
		return `${hours} часов назад` 
	} else if (resulTime == minutes && minutes == 1) {
		return `${minutes} минуту назад` 
	} else if (resulTime == minutes && minutes > 1 && minutes <= 4) {
		return `${minutes} минуты назад` 
	} else if (resulTime == minutes && minutes >= 5) {
		return `${minutes} минут назад` 
	}
	return result;
}