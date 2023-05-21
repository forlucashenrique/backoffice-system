import { useAuth } from "../../contexts/AuthContext";


export const Home = () => {

    const {  user } = useAuth();

    return (
        <div >
            <h1
                style={{
                    fontSize: '4rem',
                }}
            >
                Bem-vindo, {user?.name}.
            </h1>

        </div>
    )
}