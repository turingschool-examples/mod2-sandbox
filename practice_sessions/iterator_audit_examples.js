/*
  node practice_sessions/iterator_audit_examples.js
*/ 
console.log("iterator_audit_examples.js is running")




let instructors = [
	{ fullName: 'Pamela Lovett', mod: 2, alum: true, age: 34 },
	{ fullName: 'Brittany Storoz', mod: 2, alum: false, age: 32 },
	{ fullName: 'David Whitaker', mod: 1, alum: true, age: 36 },
	{ fullName: 'Cody Sehl', mod: 2, alum: false, age: 30 },
]





let players = {
  expert: [
      { name: 'Johnny', points: 150, status: 'active', level: 'expert' },
      { name: 'Rachel', points: 224, status: 'idle', level: 'expert' },
      { name: 'Erica', points: 146, status: 'idle', level: 'expert' },
      { name: 'Mitch', points: 122, status: 'active', level: 'expert' }
    ],
  novice: [
    { name: 'Andrew', points: 12, status: 'idle', level: 'novice' },
    { name: 'David', points: 24, status: 'active', level: 'novice'  },
    { name: 'Kris', points: 46, status: 'idle', level: 'novice'  },
    { name: 'Kristin', points: 36, status: 'active', level: 'novice'  }
  ],
  intermediate: [
    { name: 'Allen', points: 88, status: 'idle', level: 'intermediate'  },
    { name: 'Blake', points: 90, status: 'active', level: 'intermediate'  },
    { name: 'Aubrey', points: 84, status: 'active', level: 'intermediate'  },
    { name: 'Monroe', points: 92, status: 'idle', level: 'intermediate'  }
  ],
}


function findTotal(skill, status) {  
  const total = players[skill].reduce((acc, player) => {
    if (player.status === status) {
      acc += player.points
    }
    return acc
  }, 0)
  return total
}

console.log( findTotal('expert', 'active') ) // expected result -> 272
console.log( findTotal('novice', 'idle') ) // expected result -> 58