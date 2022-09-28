import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Stack
      spacing={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        variant="contained"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Typography variant="h4" component="h4">
        <span>{count}</span>
      </Typography>
      <Button
        variant="outlined"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </Stack>
  )
}