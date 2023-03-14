import React, {useEffect, useState} from "react";
import {Container, Skeleton} from "@mui/material";
import Pack from "../../components/Pack/Pack";
import {PackType} from "../../components/Types/Types";
import {SUCCESS} from "../../constants/Constants";

export default function PracticePacks() {
    const [packs, setPacks] = useState<PackType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await fetch("/practice-packs").then(res => res.json());
            // TODO: will do like pro
            switch (response.status) {
                case SUCCESS:
                    setPacks(response.data);
                    break;
            }
            setLoading(false);
        })();
    }, []);

    return (
        <Container maxWidth="md">
            {
                loading ?
                    [1, 2].map((num) => (
                        <Skeleton key={num} sx={{m: 2}} animation="wave" variant="rounded" height={400} />
                    ) )
                : packs.map((item, index) => (
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