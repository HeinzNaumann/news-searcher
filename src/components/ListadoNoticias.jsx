import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const ListadoNoticias = () => {


    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20)

    return (
        <>
            <Typography textAlign={'center'}
                marginY={5}
                variant='h3'
                component={'h2'}>
                Ultimas noticas

            </Typography>

            <Grid container
                spacing={2}>

                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </Grid>

            <Stack
                sx={{
                    marginY: 5
                }}
                spacing={2}
                direction={'row'}
                justifyContent='center'
                alignItems='center'

            >

                <Pagination page={pagina} count={totalPaginas} color="primary" onChange={handleChangePagina} />

            </Stack>
        </>
    )
}

export default ListadoNoticias