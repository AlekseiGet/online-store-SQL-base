import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import { Context } from '../../';
import { fetchTypes, fetchBrand, fetchDevice, createDevice } from '../../http/deviceApi';
import { observer } from 'mobx-react-lite';

const Delete = observer(({ show, onHide }) => {
    const { device } = useContext(Context)

    useEffect(() => {
        fetchDevice(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {   //выбраный тип из DeviceStore, выбраный бренд, текущая страница полученая из STORE, limit
            device.setDevice(data.rows)
            device.setTotalCount(data.count)//узнать сколько товара получили после запроса
        })
    }, [device.selectedType, device.selectedBrand])


    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrand().then(data => device.setBrand(data))
    }, [])

    const deletDevice = () => {
     //   createType({ name: value }).then(data => setValue(''))
      //  onHide()
        alert(`удалить "${device.selectedDevice.name }" ?`)
      }

    const deletType = () => {
        alert(`удалить "${device.selectedType.name }" ?`)
    }

    const deletBrand = () => {
        alert(`удалить "${device.selectedBrand.name }" ?`)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Что нужно удалить?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle >{device.selectedType.name || 'Выберите тип'} </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                        <Button variant={"outline-succes"} onClick={deletType}>Удалить ?</Button>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle >{device.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                        <Button variant={"outline-succes"} onClick={deletBrand}>Удалить ?</Button>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle >{device.selectedDevice.name || 'Выберите устройство'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.devices.map(dev =>
                                <Dropdown.Item onClick={() => device.setSelectedDevice(dev)} key={dev.id}>{dev.name}</Dropdown.Item>               
                            )}
                        </Dropdown.Menu>
                        <Button variant={"outline-succes"} onClick={deletDevice}>Удалить ?</Button>
                    </Dropdown>              
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default Delete;