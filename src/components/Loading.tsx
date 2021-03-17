import loading from '../images/loading.svg';

interface Props {
    size: number,
    loading: boolean,
    children: React.ReactNode
}

export const Loading = (props: Props) => {
    if(props.loading){
        return (<img src={loading} width={props.size + "px"} height={props.size + "px"} alt="loading" />)
    }else{
        return(
        <>
            {props.children}
        </>)
    }
}