import React, {useEffect, useState} from "react";
import {Container, Skeleton} from "@mui/material";
import Pack from "../../components/Pack/Pack";
import {PackType} from "../../types/Types";

export default function PracticePacks() {
    // ToDo rename variables
    const [value, setValue] = useState<PackType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await fetch("/practice-packs").then(res => res.json());
            setValue(response);
            // ToDo: remove after testing
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        })();
    }, []);

    return (
        <Container maxWidth="md">
            {
                loading ?
                    <>
                        {/*// ToDo: fix that ! :( */}
                        <Skeleton sx={{m: 2}} animation="wave" variant="rounded" height={400} />
                        <Skeleton sx={{m: 2}} animation="wave" variant="rounded" height={400} />
                    </>
                : value.map((item, index) => (
                    <Pack
                        key={index}
                        name={item.name}
                        author={item.author}
                        date={item.date}
                        description={item.description}
                        image={item.image}
                        data={item.data}
                    />
                ) )
            }
        </Container>
    );
}