'use client'
import Button from '@/components/Global/Button/Button';
import { Slider } from '@mui/material'
import Box from '@mui/material/Box';
import classNames from 'classnames';
import React, { useEffect } from 'react'
import { useState } from 'react'
import DropDownSideBar from '../../../Global/DropDownSideBar/DropDownSideBar';
import Title from '@/components/Global/Title/Title';

function valuetext(value: number) {
    return `${value}°C`;
}
type eType = React.FormEvent<HTMLFormElement>

const RangeSlider = () => {

    
    const [value, setValue] = useState<number[]>([20, 50]);
    // const [minInput, setMinInput] = useState<number | any>(20)
    // const [maxInput, setMaxInput] = useState<number | any>(50)
    const [placeholder , setIsPlaceholder] = useState<string>('0')



    const handleChange = (event: Event | eType, newValue: number | number[]) => {
        
        setValue(newValue as number[]);
    //     setMinInput(newValue[0])
    //     setMaxInput(newValue[1])
    // };
    }
    const handleSubmit = (e: eType) => {
        e.preventDefault()
        console.log(value)
        // handleChange(e,[minInput,maxInput])
    }
    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
       e.target.id == 'min' ? ( setValue([Number(e.target.value),value[1]]) )
        :(setValue([value[0], Number(e.target.value)]))
    }
    useEffect(() => {
        setIsPlaceholder('0')
    }, [placeholder])
    return (
        <div className={classNames('flex flex-col gap-y-4')}>
            <Slider
                className=''
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
            <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col justify-center items-center gap-y-2'>
                <Title classnameParent={classNames('!flex-row gap-2')}>
                    <Title>
                        <label htmlFor="min">Min</label>
                        <input id='min' type='number' value={value[0]}  min={0} onChange={(e) => handleChangeInput(e) } className={classNames('w-28 h-10 pl-2 rounded-md border-gray-300 border-2')} />
                    </Title>
                    <Title>
                        <label htmlFor="max">Max</label>
                        <input id='max' type='number' value={value[1]} placeholder={placeholder} min={0} onChange={(e) => handleChangeInput(e) } className={classNames('w-28 h-10 pl-2 rounded-md border-gray-300 border-2')} />
                    </Title>
                </Title>
               
              
                <Button type='submit' label='Apply' classname='bg-white text-blue-600 rounded-md w-20 h-10 border-gray-300 border-2' />
            </form>
            
        </div>
    )
}

export default DropDownSideBar(RangeSlider)
