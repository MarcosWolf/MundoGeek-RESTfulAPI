type Props = {
    width: number | string;
    height: number | string;
    borderRadius?: number; 
}

function Skeleton({width, height, borderRadius}: Props) {
    return (
        <div className="container" style={{width, height, borderRadius }} />
    )

}

export default Skeleton;