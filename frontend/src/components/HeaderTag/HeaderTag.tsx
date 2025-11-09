import './HeaderTag.css'

interface Props {
    tag: string; 
}

function HeaderTag({ tag }: Props) {
    return (
        <div className='header-tag'>
            <h1>{tag}</h1>
        </div>
    );

}

export default HeaderTag;