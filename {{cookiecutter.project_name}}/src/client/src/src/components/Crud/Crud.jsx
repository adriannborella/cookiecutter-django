import React, { useEffect, useState } from 'react'
import { ListCrud } from './ListCrud';
import { TableCrud } from './TableCrud';
import { FormData } from './FormData';
import { Button } from 'react-bootstrap';
import { Loading, Title } from '../atoms';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Crud({dataSource, initialValues, title, displayFields, validationSchema, children}) {
    const [isMobile, setIsMobile] = useState(false);
    const [data, setData] = useState(null)
    const [mode, setMode] = useState("list")
    const [reload, setReload] = useState(false)
    const [currentRecord, setCurrentRecord] = useState(initialValues)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        console.log(mode, reload,"Reloading");
        if (mode !== 'list') return

        dataSource.getList().then(response => {
            console.log(response);
            setData(response)
        })
    }, [mode,reload])

    const onHandleClickEdit = async (item) => {
        const recordEdit = await dataSource.getOne(item.id)
        setCurrentRecord(recordEdit)
        setMode('form')
    }
    const onHandleClickDelete = async (item) => {
        if (confirm(`Do you want to DELETE the item ${item.id}?`)) {
            await dataSource.deleteRecord(item.id)
            toast.success('Record DELETED');
            setReload(!reload)
        }
    }

    const onHandleClickAdd = () => {
        setCurrentRecord(initialValues)
        console.log("Add")
        setMode('form')
    }

    const onHandleSave = (values) => {
       console.log("onHandleSave", values);
       dataSource.save(values)
       toast.success('Record saved');
       setMode('list')
    }

    const onHandleCancel = () => {
        console.log("Cancel")
        setMode('list')
    }

    const onHandleReload = () => {
        setReload(!reload)
    }

    const renderList = () => {
        return (
            <>
                <div>
                    <span>Search Input</span>
                    <Button variant='success' onClick={onHandleClickAdd}>Add</Button>
                    <Button variant='secundary' onClick={onHandleReload}>Refresh</Button>
                </div>
                <hr />
                {isMobile ?
                    <ListCrud data={data} displayFields={displayFields} onHandleClickDelete={onHandleClickDelete} onHandleClickEdit={onHandleClickEdit}/> :
                    <TableCrud data={data} displayFields={displayFields} onHandleClickDelete={onHandleClickDelete} onHandleClickEdit={onHandleClickEdit}/>
                }
            </>
        )
    }

    const renderForm = () => {
        return (
            <>
                <FormData
                    onHandleCancel={onHandleCancel}
                    onHandleSave={onHandleSave}
                    validationSchema={validationSchema}
                    initialValues={currentRecord}>
                    {children}
                </FormData>
            </>
        )
    }

    if( data === null ) return <Loading />

    return (
        <>
            <Title title={title} />
            <hr />
            {
                mode === 'list' ? renderList() : renderForm()
            }
            <ToastContainer />
        </>
    )
}
