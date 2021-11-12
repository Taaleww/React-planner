function DetailItem(props) {
    return (
        <p className="flex">
            <span className="ml-2">
                <img src={props.img}/>    
            </span>    
            <span className="ml-3"> {props.detail}</span> 
        </p>
    )
}

export default DetailItem;