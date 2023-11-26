import { Container, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Pack from '../../components/Pack/Pack';
import { PackType } from '../../components/Types/Types';
import { API_ROUTES } from '../../constants/Constants';
import useHttp from '../../hooks/Http/Http';

export default function PracticePacks() {
    const { loading, request } = useHttp();
    const [packs, setPacks] = useState<PackType[]>([]);

    useEffect(() => {
        (async () => {
            const result = await request(API_ROUTES.PRACTICE_PACKS);
            setPacks(result.data);
        })();
    }, []);

    return (
        <Container maxWidth="md">
            {loading
                ? [1, 2].map((num) => (
                      <Skeleton key={num} sx={{ m: 2 }} animation="wave" variant="rounded" height={400} />
                  ))
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
                  ))}
        </Container>
    );
}
