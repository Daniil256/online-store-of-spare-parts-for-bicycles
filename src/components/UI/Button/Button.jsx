import './Button.css'

export const Button = ({ children, func }) => {
    return (
        <span
            className='btn'
            onClick={func}>
            {children}
        </span>
    )
}