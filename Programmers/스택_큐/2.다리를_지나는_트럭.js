class Queue {
  constructor () {
    this.q = []
  }

  en (data) {
    this.q.push(data)
  }

  de () {
    this.q.shift()
  }

  get front () {
    return this.q[0]
  }

  get isEmpty () {
    return this.q.length === 0
  }
}

function solution (bridge_length, weight, truck_weights) {
  const bridge = new Queue()
  let time = 1
  let total_weight = 0
  let cur_truck = 0

  do {
    if (!bridge.isEmpty) {
      if (bridge.front.time === time) {
        total_weight -= bridge.front.data
        bridge.de()
      }
    }

    if ((total_weight < weight) && ((weight - total_weight) >= truck_weights[cur_truck]) && cur_truck < truck_weights.length) {
      bridge.en({ time: time + bridge_length, data: truck_weights[cur_truck] })
      total_weight += truck_weights[cur_truck]
      cur_truck++
      time++
    } else if (!bridge.isEmpty) {
      time = bridge.front.time
    }
  } while (cur_truck < truck_weights.length || !bridge.isEmpty)

  return time
}
