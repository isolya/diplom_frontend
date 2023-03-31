import React, { memo, useEffect } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Rating,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { SignInInput } from '../SignIn/SignIn.type';
import { Controller, useForm } from 'react-hook-form';
import { ReviewsInput } from './Reviews.type';


const theme = createTheme();

export const Reviews = memo(() => {
  const [course, setCourse] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCourse(event.target.value as string);
  }
  const labels: { [index: string]: string } = {
    1: 'Бесполезный',
    2: 'Пойдет',
    3: 'Ok',
    4: 'Хорошо',
    5: 'Отлично',
  };
  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  const [value, setValue] = React.useState<number | null>(4);
  const [hover, setHover] = React.useState(-1);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewsInput>();

  const onSubmit = (data: ReviewsInput) => {
   console.log(data);
  };


  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Container component="main"  sx={{ marginTop: 20 }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h3" sx={{paddingBottom:'40px'}}>
              Добавить отзыв о курсе
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <Box sx={{ minWidth: 520 }}>
                <FormControl fullWidth>
                  <InputLabel >Выбрать курс</InputLabel>
                  <Select
                   {...register('course', {
                    required: 'Выберите курс',
                  })}
                  id="course"
                  autoFocus
                    value={course}
                    label="Выбрать курс"
                    onChange={handleChange}
                    error={errors.course ? true : false}
                  
                  >
                    <MenuItem value={1}>Scratch</MenuItem>
                    <MenuItem value={2}>Roblox</MenuItem>
                    <MenuItem value={3}>Web/HTML</MenuItem>
                    <MenuItem value={3}>Python</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box >
                <TextField
                  {...register('massage', {
                    required: 'Поле не может быть пустым',
                  })}
                  id="massage"
                  
                  autoFocus
                  margin="normal"
                  fullWidth
                  placeholder="Пожалуйста введите ваш текст"
                  multiline
                  error={errors.massage ? true : false}
                  helperText={errors.massage?.message}
                />
              </Box>
              <Box
                sx={{
                  width: 200,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{}}>Установите рейтинг курса:</Typography>
                 <Controller
        name="rating"
        control={control}
        render={({ field }) => 
                <Rating
                {...field} 
                id="rating"
                  value={value}
                  precision={1}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />}
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </Box>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Отправить
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
});
