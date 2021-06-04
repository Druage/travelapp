import React, {Fragment, useEffect, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {ArrowSmDownIcon, ArrowSmUpIcon, CheckIcon, SelectorIcon} from "@heroicons/react/outline";
import {GroupMember, groupMemberService} from "../services/groupMemberService";
import {classNames} from "../utils/utils";

const stats = [
    {name: 'Jane Cooper', moneyOwedTo: '$0.00', previousStat: '70,946', change: 'Fully Paid', changeType: 'increase'},
    {name: 'Bad Bish Bean', moneyOwedTo: '$0.00', previousStat: '56.14%', change: 'Fully Paid', changeType: 'increase'},
    {
        name: 'Maela Jimenz',
        moneyOwedTo: '$24.57',
        previousStat: '28.62%',
        change: 'Waiting On Payment',
        changeType: 'decrease'
    },
    {
        name: 'Daniel Lee',
        moneyOwedTo: '$755.43',
        previousStat: '28.62%',
        change: 'Waiting On Payment',
        changeType: 'decrease'
    },
]

export function ExpensesReport() {

    const [groupMembers, setGroupMembers] = useState<GroupMember[] | null>(null)
    const [expenses, setExpenses] = useState(
        [
            {
                isFullyPaid: true,
                dateCreated: 'June 10th, 2021',
                name: 'Jane Cooper',
                title: 'Uber Ride',
                department: 'Las Vegas, NV',
                cost: 37.00,
                email: 'jane.cooper@example.com',
                image:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
            },
            {
                isFullyPaid: false,
                dateCreated: 'June 10th, 2021',
                name: 'Bad Bish Bean',
                title: 'Flamingo Hotel Room',
                department: 'Las Vegas, NV',
                cost: 500.00,
                email: 'beany@example.com',
                image:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
            },

            {
                isFullyPaid: false,
                dateCreated: 'June 10th, 2021',
                name: 'Maela Jimenz',
                title: 'Birthday Dinner',
                department: 'Las Vegas, NV',
                cost: 230.00,
                email: 'jane.cooper@example.com',
                image:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
            },

            {
                isFullyPaid: false,
                dateCreated: 'June 10th, 2021',
                name: 'Daniel Lee',
                title: 'Pool Party',
                department: 'Las Vegas, NV',
                cost: 50.00,
                email: 'jane.cooper@example.com',
                image:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
            },
            // More people...
        ]
    )

    const [selected, setSelected] = useState<GroupMember | null>(null)

    useEffect(() => {
        if (!groupMembers) {
            let members = groupMemberService.getGroupMembers()
            members = [{id: 11, name: "Total"}, ...members];
            setGroupMembers([...members]);

            setSelected(members[0])
        }
    }, [groupMembers, selected]);

    return (<div className="p-16 h-full w-full bg-white">
        <p className="text-3xl font-bold mb-6">Expensies Report</p>

        <div className="mb-3 w-full border-t border-gray-200"/>

        <Listbox value={selected} onChange={setSelected}>
            {({open}) => (
                <>
                    <Listbox.Label className="block text-sm font-medium text-gray-700">Report Selection</Listbox.Label>
                    <div className="mt-1 relative">
                        <Listbox.Button
                            className="relative w-1/5 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <span className="block truncate">{selected?.name}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
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
                                {groupMembers && groupMembers.map((member) => (
                                    <Listbox.Option
                                        key={member.id}
                                        className={({active}) =>
                                            classNames(
                                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                'cursor-default select-none relative py-2 pl-8 pr-4'
                                            )
                                        }
                                        value={member}
                                    >
                                        {({selected, active}) => (
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
                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
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

        <div className="mt-6 w-full border-t border-gray-200"/>

        <p className="text-5xl mt-6 mb-6">
            <div className="text-sm font-medium text-gray-700">Full Trip Cost</div>
            <span>${expenses && expenses.filter(e => !e.isFullyPaid).map(e => e.cost).reduce((a, b) => a + b)}</span>
        </p>

        <div className="mb-12">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Group Breakdown</h3>
            <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
                {stats.map((item) => (
                    <div key={item.name} className="px-4 py-5 sm:p-6">
                        <dt className="text-base font-normal text-gray-900 text-xl">{item.name}</dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                {item.moneyOwedTo}
                            </div>

                            <div
                                className={classNames(
                                    item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                                    'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                                )}
                            >
                                <span
                                    className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                                {item.change}
                            </div>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>

        <div className="mt-6 flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Is Fully Paid
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Date
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Title
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Split With
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Cost
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {expenses && expenses.map((expense) => (
                                <tr key={expense.name}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 flex justify-center items-center">

                                                <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600"
                                                       defaultChecked={expense.isFullyPaid}
                                                       onChange={event => expense.isFullyPaid = event.target.checked}/>

                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{expense.dateCreated}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{expense.title}</div>
                                        <div className="text-sm text-gray-500">{expense.department}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                          className="inline-flex text-xs leading-5">

                          <div className="flex -space-x-2 overflow-hidden"><img
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                          />
                          <img
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                          />
                          <img
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                              alt=""
                          />
                          <img
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                          />
                          </div>
                      </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${expense.cost}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            {/*Edit*/}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    </div>)
}
