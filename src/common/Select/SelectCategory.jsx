import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { mainAction } from "../../redux/actions";
import Select from "react-select";
const SelectCategoryComp = ({
  onSelected = () => {},
  isDisabled = false,
  clearData = [],
  isMulti = false,
  Type = 0,
}) => {
  const [data, setData] = useState([]);
  const [valueS, setValueS] = useState([]);
  const onSelecteItem = (item) => {
    onSelected(item);
    setValueS(item);
  };
  const dispatch = useDispatch();

  const Shop_spCategories_List = async () => {
    const params = {
      Json: JSON.stringify({ KeySelect: 1 }),
      func: "Shop_spCategories_List",
    };
    const list = await mainAction.API_spCallServer(params, dispatch);
    const FirstData = { value: -1, label: "Vui lòng chọn" };
    let dataSelect = [];

    if (isMulti === false) {
      dataSelect.push(FirstData);
      setValueS(FirstData);
    }
    list.forEach((element, index) => {
      dataSelect.push({
        value: element.CategoryId,
        label: element.CategoryName,
      });
    });

    if (clearData.length > 0) {
      let datatam = [],
        valuetam = "";
      clearData.forEach((element, index) => {
        if (element.value !== -1) {
          valuetam = dataSelect.find((a) => a.value == element.value);
          datatam.push(valuetam);
        }
      });
      setValueS(datatam);
    } else {
      setValueS({ value: 0, label: "Vui lòng chọn" });
    }
    setData(dataSelect);
  };

  useEffect(() => {
    Shop_spCategories_List();
  }, [Type]);

  //#region dùng cho select multi

  let arr = [];

  useEffect(() => {
    if (isMulti === true) {
      if (clearData.length === 0) {
        setValueS({ value: 0, label: "Vui lòng chọn" });
      } else {
        for (const item of clearData) {
          const a = data.filter(
            (a) => a.value == item.value && item.value !== 0
          );
          // const a = data.filter(a => a.value == item)
          arr.push(...a);
        }
        setValueS(arr);
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
      menuPosition={"fixed"}
    />
  );
};

export const SelectCategory = React.memo(SelectCategoryComp);
