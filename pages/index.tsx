import { useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"
import type { NextPage } from "next"
import Head from "next/head"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home: NextPage = ({ data }: any) => {
    console.log(data)
    const bg = useColorModeValue("#fff", "#1A202C")

    return (
        <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
        >
            <div style={{ background: bg }}>
                <Head>
                    <title>Legal Dove</title>
                    <link rel="icon" href="/logo.svg"></link>
                </Head>
                <Navbar />
                <Hero data={data} />
            </div>
        </motion.div>
    )
}

export default Home

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/data")
    const data = await res.json()

    return {
        props: { data: data }, // will be passed to the page component as props
    }
}
