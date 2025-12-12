type TaskStatus = 'todo' | 'inprogress' | 'completed' | 'cancelled';
type TaskDuration = 'day' | 'week' | 'month' | 'year' | 'future';

interface Task {
  // Идентификаторы
  id: string; // Лучше string (nanoid или UUID)

  // Основной контент
  title: string;
  description?: string;
  notes?: string; // Дополнительные заметки

  // Статус и время
  status: TaskStatus;
  duration: TaskDuration;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date; // Для статистики
  deadline?: Date;

  // Организация
  tags?: string[];
  subtasks?: string[]; // ID подзадач
  parentId?: string; // Для иерархии задач

  // Метаданные
  priority?: number; // 1-5 или 'low' | 'medium' | 'high'
  estimatedTime?: number; // в минутах
  actualTime?: number; // в минутах (фактическое выполнение)

  // ПОДУМАТЬ
  // isMigrated?: boolean; // Перенесена ли задача
  // collectionId?: string; // ID коллекции
}
