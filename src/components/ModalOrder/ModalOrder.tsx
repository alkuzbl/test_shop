import React, { FC } from 'react';

import { Button, Container, Modal } from '@mui/material';
import { useDispatch } from 'react-redux';

import { FormControl, InputF } from 'components/common';
import { placeOrder } from 'store/middlewares/placeOrder';
import { orderValidationSchema } from 'utils/validationSchemes';

type ModalOrderPropsType = {
  open: boolean;
  onClose: (value: boolean) => void;
};
export const ModalOrder: FC<ModalOrderPropsType> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const handleSubmitOrder = (value: any) => {
    dispatch(placeOrder(value));

    onClose(false);
  };

  const handleClose = () => {
    onClose(false);
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '1px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <FormControl onSubmit={handleSubmitOrder} defaultValues={orderValidationSchema}>
          <InputF name="name" type="text" label="Ваше имя" />
          <InputF name="email" type="text" label="Email" />
          <InputF name="phone" type="text" label="Ваш номер телефона" />
          <Button type="submit" variant="outlined">
            Отправить заказ
          </Button>
        </FormControl>
      </Container>
    </Modal>
  );
};
