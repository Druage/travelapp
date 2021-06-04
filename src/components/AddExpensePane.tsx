import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, PlusCircleIcon, SelectorIcon} from "@heroicons/react/outline";
import React, {Fragment, useState} from "react";
import {GroupMember, groupMemberService} from "../services/groupMemberService";
import {classNames} from "../utils/utils";

export function AddExpensePane() {

    const groupMembers = groupMemberService.getGroupMembers()

    const [selected, setSelected] = useState<GroupMember>(groupMembers[3])

    return (
        <div className="p-4 h-full relative flex flex-col w-96 border-r border-gray-200 bg-white gap-6">
            {/* Your content */}

            <p className="text-3xl">Add An Expense</p>

            <div>
                <label htmlFor="activity" className="block text-sm font-medium text-gray-700">
                    Activity
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        name="activity"
                        id="activity"
                        className="pl-3 pr-3 h-10 focus:outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Rental Car, Hotel, etc"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Price
                </label>

                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border border-gray-300 rounded-md"
                        placeholder="0.00"
                        aria-describedby="price-currency"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm" id="price-currency">
                                USD
                              </span>
                    </div>
                </div>
            </div>

            <div>
                <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                        <>
                            <Listbox.Label className="block text-sm font-medium text-gray-700">Who Paid For It</Listbox.Label>
                            <div className="mt-1 relative">
                                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <span className="block truncate">{selected.name}</span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options
                                        static
                                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                    >
                                        {groupMembers.map((member) => (
                                            <Listbox.Option
                                                key={member.id}
                                                className={({ active }) =>
                                                    classNames(
                                                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                        'cursor-default select-none relative py-2 pl-8 pr-4'
                                                    )
                                                }
                                                value={member}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {member.name}
                        </span>

                                                        {selected ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                    'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                                )}
                                                            >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>
            </div>

            <div>
                <button
                    type="button"
                    className="w-full inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <PlusCircleIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true"/>
                    Add Expense
                </button>
            </div>

        </div>
    )
}
