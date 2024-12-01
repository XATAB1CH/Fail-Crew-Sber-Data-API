package manager

type Task struct {
	processor *Processor
	queue     chan *Recipy
}

type Report struct {
	Data          Ingredient
	RecipyTemlate Recipy
}

type Manager struct {
	Tasks   []Task
	results []Report
}

func (m *Manager) GetResult() (res []Report) {
	res = m.results
	m.results = []Report{}
	return res
}

func (m *Manager) BeginWork(processors_number int, queue_capacity int) {
	m.Tasks = make([]Task, processors_number)
	var tasks []Task
	for _, task := range m.Tasks {
		task.processor = &Processor{}
		task.queue = make(chan *Recipy, queue_capacity)
		tasks = append(tasks, task)
		go m.StartProcessor(&task)
	}
	m.Tasks = tasks
}

func (m *Manager) minLoadedProc() (proc_id int) {
	min := 50 //хардкод
	for index, task := range m.Tasks {
		n := len(task.queue)
		if n < min {
			min = n
			proc_id = index
		}
	}
	return proc_id
}

func (m *Manager) GiveRecipy(recipy *Recipy) {
	min_loaded_proc_id := m.minLoadedProc()
	m.Tasks[min_loaded_proc_id].queue <- recipy
}

func (m *Manager) StartProcessor(task *Task) {
	for {
		recipy, opened := <-task.queue
		if !opened {
			break
		}
		task.processor.Load(*recipy)
		var res Ingredient = task.processor.Execute()
		m.results = append(m.results, Report{res, *recipy})
	}
}

func (m *Manager) StopProcessor(processor_id int) {
	//можно добавить реальную остановку процессора во время исполнения задачи
	close(m.Tasks[processor_id].queue)
}
