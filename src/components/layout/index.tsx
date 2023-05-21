import { ReactNode } from "react"
import { Sidebar } from "./sidebar";

import styles from './Layout.module.css';
import { Header } from "./header";
import { Container } from "./container";
import { Footer } from "./footer";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {

    return (
        <div className={styles.layoutWrapper}>
            <Sidebar />

            <Container>
                <Header />
                <div className={styles.contentWrapper}>
                    {children}
                </div>
                <Footer/>
            </Container>

        </div>
    )
}