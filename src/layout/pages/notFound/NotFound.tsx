import img from '../../../assets/404.svg'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return <>
        <div
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100vw",
            height: "100vh"
        }}>
            <img
                style={{
                width: "100%",
                maxWidth: "800px",
                height: "auto"
            }}
                src={img}
                alt={'404'}/>
            <Link
                to="/"
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#333",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "8px"
                }}
            >
                Back to Home
            </Link>
        </div>
    </>
};
