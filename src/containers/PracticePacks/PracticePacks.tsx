import React, {useEffect, useState} from "react";
import {Container} from "@mui/material";
import Pack from "../../components/Pack/Pack";
import {PackType} from "../../types/Types";

export default function PracticePacks() {
    // ToDo rename variables
    const [value, setValue] = useState<PackType[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("/practice-packs").then(res => res.json());
            setValue(response);
        })();
    }, []);

    return (
        <Container maxWidth="md">
            {
                value.map((item, index) => (
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