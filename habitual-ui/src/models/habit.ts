class Habit {
  private name: string
  private consistencyGoal: number
  private startDate: Date

  public constructor(name: string, consistencyGoal: number, startDate: Date) {
    this.name = name
    this.consistencyGoal = consistencyGoal
    this.startDate = startDate
  }

  public getName(): string {
    return this.name
  }

  public getConsistencyGoal(): number {
    return this.consistencyGoal
  }

  public getStartDate(): Date {
    return this.startDate
  }
}

export default Habit
