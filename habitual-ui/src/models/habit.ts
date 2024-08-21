class Habit {
  private name: string
  private consistencyGoal: number

  public constructor(name: string, consistencyGoal: number) {
    this.name = name
    this.consistencyGoal = consistencyGoal
  }

  public getName(): string {
    return this.name
  }

  public getConsistencyGoal(): number {
    return this.consistencyGoal
  }
}

export default Habit
