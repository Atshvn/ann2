import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { mainAction } from '../../Redux/Actions';
import Select from 'react-select';
const SelectAttributeComp = ({
    onSelected = () => { },
    isDisabled = false,
    clearData = [],
    isMulti = false,
    Type = 0,
    Data = []
}) => {
    const [data, setData] = useState([])
    const [valueS, setValueS] = useState([])
    const onSelecteItem = (item) => {
        onSelected(item)
        setValueS(item);
    }
    const dispatch = useDispatch();
    const Shop_spAttribute_List = async () => {
        const params = {
            Json: JSON.stringify({ KeySelect: 1 }),
            func: "Shop_spAttribute_List"
        }
        const list = await mainAction.API_spCallServer(params, dispatch);
        const FirstData = { value: -1, label: 'Vui lòng chọn' };
        let dataSelect = [];

        if (isMulti === false) {
            dataSelect.push(FirstData);
            setValueS(FirstData);
        }
        list.forEach((element, index) => {
            dataSelect.push({ value: element.AttributeId, label: element.AttributeName });
        });

        if (clearData.length > 0) {
            let datatam = [], valuetam = "";
            clearData.forEach((element, index) => {
                if (element.value !== -1) {
                    valuetam = dataSelect.find(a => a.value == element.value);
                    datatam.push(valuetam);
                }
            });
            setValueS(datatam);
        }

        if (Data.length > 0) {
            for (const item of Data) {
                const a = dataSelect.filter(a => a.value == item.value && item.value !== 0)
                arr.push(...a);
            }
            setValueS(arr)
        }

        else {
            setValueS({ value: 0, label: 'Vui lòng chọn' });
        }
        setData(dataSelect)
    }


    useEffect(() => {
        Shop_spAttribute_List()
    }, [Type]);

    let arr = []
    useEffect(() => {
        if (Data.length === 0) {
            setValueS({ value: 0, label: 'Vui lòng chọn' })
        }
        else {
            for (const item of Data) {
                const a = data.filter(a => a.value == item.value)
                arr.push(...a);
            }
            setValueS(arr)
        }
    }, [Data]);

    useEffect(() => {
        if (isMulti === true) {
            if (clearData.length === 0) {
                setValueS({ value: 0, label: 'Vui lòng chọn' })
            }
            else {
                for (const item of clearData) {
                    const a = data.filter(a => a.value == item.value && item.value !== 0)
                    arr.push(...a);
                }
                setValueS(arr)
            }
        }
    }, [clearData]);
    //#endregion
    return (
        <Select
            value={valueS}
            onChange={onSelecteItem}
            options={data}
            isMulti={isMulti}
            isDisabled={isDisabled}
            menuPosition={'fixed'}
        />
    )
}


export const SelectAttribute = React.memo(SelectAttributeComp)