import styles from './css/Button.module.css'

export default function Button({img, txt, style}){
    return(
        <div>
            <button>
                <img src={img} alt="" />
                {txt}
            </button>
        </div>
    )
}