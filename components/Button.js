const Button = props => {
    return (
        <button>
            {props.children}
            <style jsx>{`
                button {
                    font-size: 1em;
                    font-weight: 300;
                    border: none;
                    border-radius: 8px;
                    padding: 4px 12px;
                    margin: 0;
                    background-color: #00BBD3;
                    color: white;
                    outline: none;
                }
            `}</style>
        </button>
    )
}

export default Button;