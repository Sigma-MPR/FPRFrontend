// import LoadingCircle from './images/loadingCircle.svg';

const LoaderButton = ({ isLoading, display, ...otherButtonProps }) => {
    return (
        <button
            disabled={isLoading}
            type="submit"
            id="load-btn"
            {...otherButtonProps}
            
        >
            {isLoading ? (
                <span
                style={{
                    'color':"white",
                }}
                >
                    loading
                    <img
                        className="loader"
                        style={{
                            display: 'inline-block',
                            'marginLeft': '10px',
                        }}
                        src={'/images/loadingCircle.svg'}
                        alt=""
                    />
                </span>
            ) : (
                <span
                    style={{
                        'color':"white",
                    }}
                >
                    {display}
                </span>
            )}
        </button>
    );
};

export default LoaderButton;
