import { Check, Plus, Trash2 } from 'lucide-react';
import React, { useState } from 'react'

const Planner = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', time: '16:18 PM', complated: false },
    ])
    const [newTodo, setNewTodo] = useState('')
    // function add todo
    const addTodo = () => {
        if (newTodo.trim() == '')
            return;
        const currentDate = new Date();
        const timeString = currentDate.toLocaleDateString([], { hour: '2-digit', minute: '2-digit' })
        const dateString = currentDate.toLocaleDateString();
        setTodos([
            {
                id: Date.now(),
                text: newTodo,
                time: `${timeString}, ${dateString} `,
                complated: false
            },
            ...todos,
        ]);
        setNewTodo('');
    };
    // Delete todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    // toggle Complete
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id == id ? { ...todo, complated: !todo.complated } : todo))
    }

    return (
        <div className='min-h-screen p-4 md:p-8 flex items-center justify-center bg-gradient-to-br from-purple-400 to-indigo-500'>
            {/* Glass Container */}
            <div className="w-full shadow-lg shadow-purple-100/30 backdrop-blur-sm bg-white/30 border border-white/20 max-w-md rounded-2xl p-8">
                {/* Header */}
                <div className="backdrop-blur-sm border border-white/20 mb-6 bg-gradient-to-r from-purple-500/80 to-purple-600/80 text-white p-4 rounded-xl">
                    <h1 className='text-2xl font-bold'>Todo's List</h1>
                </div>

                {/* Add task section */}
                <div className="mb-6">
                    <h2 className='text-lg font-semibold text-purple-800 mb-3'>Add Task</h2>
                    <div className="flex rounded-xl overflow-hidden">
                        <input
                            onChange={(e) => setNewTodo(e.target.value)}
                            value={newTodo} className='flex-1 px-4 py-3 bg-white/50 backdrop-blur-sm focus:outline-none border-r border-white/30' placeholder='Enter New Task....' type="text" name='' id=''
                            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                        />
                        <button className='backdrop-blur-sm transition flex items-center justify-center bg-purple-500/80 hover:bg-purple-600/80 text-white px-4 py-3' onClick={addTodo}>
                            <Plus />
                        </button>
                    </div>
                </div>
                {/* Todo items */}
                <div className="space-y-3">
                    {
                        todos.map((todo) => (
                            <div key={todo.id} className="p-4 rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-start  space-x-3">
                                        <button className={`${todo.complated ? 'bg-purple-500/80 text-white' : 'bg-white/50'}   mt-1 p-2 rounded-lg backdrop-blur-sm border border-white/30`} onClick={() => toggleComplete(todo.id)}>
                                            {todo.complated && <Check size={12} />}
                                        </button>
                                        <div className="">
                                            <p className={`font-medium ${todo.complated ? "line-through text-purple-600" : 'text-gray-800'}`}>
                                                {todo.text}
                                            </p>
                                            <p className='text-xs text-purple-500/80 mt-1'>{todo.time}</p>
                                        </div>
                                    </div>
                                    <button className='border border-white/30 text-purple-500/80 hover:text-purple-700/80 transition p-2
                                     rounded-lg bg-white/50 hover:bg-white/70 backdrop-blur-sm' onClick={() => deleteTodo(todo.id)}>
                                        <Trash2 />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
export default Planner